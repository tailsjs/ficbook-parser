/**
 * Get a fanfiction.
 * @param id Fanfiction ID.
 * @param random Get a random fanfiction. (WITH THIS PARAM, ID DON'T COUNT.)
 */
export function getFic(id: number, random?: boolean) : Promise<any>

/**
 * Get a module changelogs
 */
export function getChangelogs() : Promise<any>
/**
 * Get author info
 * @param id Author ID.
 * @param getComms Retrieving the last 10 author comments.
 */
export function getAuthor(id: number, getComms: boolean) : Promise<any>

/**
 * Get a request.
 * @param id Request ID.
 */
export function getRequest(id: number) : Promise<any>

/**
 * Get a fanfiction part.
 * @param id Fanfiction ID.
 * @param part Part of fanfiction.
 */
export function getFicPart(id: number, part: number) : Promise<any>