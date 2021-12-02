import React, { useEffect, FC, useState } from 'react'
import { Title, Subtitle, BodyText } from '@reapit/elements'
import { Table , TableHeadersRow, TableCell, TableRow, TableHeader} from '@reapit/elements'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { configurationAppointmentsApiService } from '../../platform-api/configuration-api'
import { getPropertiesSellingMode } from '../../platform-api/foundations-api'
import { ListItemModel, PropertyModel,MetadataModelPagedResult } from '@reapit/foundations-ts-definitions'

export type AuthenticatedProps = {}
// interface IProperties {
//   pageCount: number;
// }

export const Authenticated: FC<AuthenticatedProps> = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const [appointmentConfigTypes, setAppointmentConfigTypes] = useState<ListItemModel[]>([])
  const [propertiesData, setPropertiesData] = useState<MetadataModelPagedResult>()
  // const [propertiesData, setPropertiesData] = useState<ListItemModel[]>([])

  useEffect(() => {
    const fetchAppoinmentConfigs = async () => {
      if (!connectSession) return
      const serviceResponse = await configurationAppointmentsApiService(connectSession)
      if (serviceResponse) {
        console.log(typeof serviceResponse, {serviceResponse});
        setAppointmentConfigTypes(serviceResponse)
      }
    }
    if (connectSession) {
      fetchAppoinmentConfigs()
    }
  }, [connectSession])

 useEffect(() => {
    const fetchPropertiesData = async () => {
      if (!connectSession) return
      const propertiesResponse = await getPropertiesSellingMode(connectSession)
      if (propertiesResponse) {
        console.log({propertiesResponse})
        setPropertiesData(propertiesData)
      }
    }
    if (connectSession) {
      fetchPropertiesData()
    }
  }, [connectSession])

  console.log('Appointment Config Types are: ',typeof appointmentConfigTypes, appointmentConfigTypes[0])
  console.log('properties data ',{propertiesData}, typeof propertiesData, propertiesData?.pageCount)
  return (
    <>
      <Title>Properties for Sale</Title>

      <Table>
      <TableHeadersRow>
        <TableHeader>First Header</TableHeader>
        <TableHeader>Second Header</TableHeader>
        <TableHeader>Third Header</TableHeader>
      </TableHeadersRow>
      {/* {
propertiesData?._embedded && propertiesData?._embedded.map((data,index) => {
console.log({data})
  return <> </>
})
      } */}
      <TableRow>
        <TableCell>First Column</TableCell>
        <TableCell>Second Column</TableCell>
        <TableCell>Third Column</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>First Column</TableCell>
        <TableCell>Second Column</TableCell>
        <TableCell>Third Column</TableCell>
      </TableRow>
    </Table>
     
    </>
  )
}

export default Authenticated
