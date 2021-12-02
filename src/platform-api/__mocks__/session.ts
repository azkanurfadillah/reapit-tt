import { ReapitConnectSession } from '@reapit/connect-session'

export const mockLoginIdentity = {
  email: 'azkanurfadillah@gmail.com',
  name: 'azka nurfadillah',
  developerId: 'SOME_DEVELOPER_ID',
  clientId: '59h0uc60lpippcdv41c3jggv09',
  adminId: 'SOME_ADMIN_ID',
  userCode: 'SOME_USER_ID',
  orgName: 'SOME_ORG_NAME',
  orgId: 'SOME_ORG_ID',
  groups: ['AgencyCloudDeveloperEdition', 'OrganisationAdmin', 'ReapitUser', 'ReapitDeveloper', 'ReapitDeveloperAdmin'],
  offGroupIds: 'MKV',
  offGrouping: true,
  offGroupName: 'Cool Office Group',
  officeId: 'MVK',
  orgProduct:""
}
export const mockBrowserSession: ReapitConnectSession = {
  accessToken: JSON.stringify({
    exp: Math.round(new Date().getTime() / 1000) + 360, // time now + 6mins - we refresh session if expiry within 5mins
  }),
  refreshToken: 'SOME_REFRESH_TOKEN',
  idToken: JSON.stringify({
    name: mockLoginIdentity.name,
    email: mockLoginIdentity.email,
    'custom:reapit:developerId': mockLoginIdentity.developerId,
    'custom:reapit:clientCode': mockLoginIdentity.clientId,
    'custom:reapit:marketAdmin': mockLoginIdentity.adminId,
    'custom:reapit:userCode': mockLoginIdentity.userCode,
    'cognito:groups': mockLoginIdentity.groups,
  }),
  loginIdentity: mockLoginIdentity,
}
