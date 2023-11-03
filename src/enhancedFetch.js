const rejectWhenNotOk = async (response) => {
  if (response.ok) return response

  const genericHttpError = new Error(
    `${response.status} ${response.statusText}: ${response.url}`
  )

  let errorToReject
  try /* to narrow down the error message to a more specific one */ {
    const json = await parseJson(response)

    const specificErrorMessage = json.error.message
    if (!specificErrorMessage) {
      throw new Error("No specific message error in response body")
    }

    const specificApiError = new Error(specificErrorMessage, {
      cause: genericHttpError,
    })

    errorToReject = specificApiError
  } catch (err) {
    // fall-back to the generic one
    errorToReject = genericHttpError
  }

  return Promise.reject(errorToReject)
}

const parseJson = (response) => response.json()

const enhancedFetch = (resourceUrl, { shouldParseJson, ...fetchInit } = {}) => {
  const headers = new Headers(fetchInit.headers)

  if (shouldParseJson) {
    headers.append("Accept", "application/json")
  }

  return fetch(resourceUrl, { ...fetchInit, headers })
    .then(rejectWhenNotOk)
    .then(parseJson)
}

export default enhancedFetch

export const getJson = (resourceUrl, enhancedFetchOptions = {}) =>
  enhancedFetch(resourceUrl, {
    ...enhancedFetchOptions,
    // custom options
    shouldParseJson: true,
    // fetchInit
    method: "GET",
  })
