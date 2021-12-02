import { ReapitConnectSession } from '@reapit/connect-session'
import { ListItemModel,MetadataModelPagedResult,PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { URLS, BASE_HEADERS } from '../constants/api'

export const getPropertiesSellingMode = async (
    session: ReapitConnectSession,
  ): Promise<PropertyModelPagedResult | undefined> => {
    try {
      const response = await fetch(`${window.reapit.config.platformApiUrl}${URLS.PROPERTIES}/?marketingMode=selling`, {
        method: 'GET',
        headers: {
          ...BASE_HEADERS,
          Authorization: `Bearer ${session.accessToken}`,
        },
        
      })
  
      if (response) {
        const responseJson: Promise<PropertyModelPagedResult | undefined> = response.json()
        return responseJson
      }
  
      throw new Error('No response returned by API')
    } catch (err) {
      console.error('Error fetching Configuration Appointment Types', err)
    }
  }