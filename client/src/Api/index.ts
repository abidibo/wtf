import config from "../Config"

export default {
  users: `${config.api.basePath}/user`,
  user: (id: number): string => `${config.api.basePath}/user/${id}`,
}
