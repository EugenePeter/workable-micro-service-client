export interface IUserWorkflowParams<TContext = any> {
  workflow_type: string
  work_offline?: boolean /** Default (true) */
  instance?: number | string /** Default (0) */
  params?: TContext
  persist?: boolean /** Default (true) */
  session_token?: string
  socket_host?: string
}
