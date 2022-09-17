import React, { useState } from 'react'
import SegmentedButton from '../pages/component/segmentControlButton'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import FaceIcon from '@mui/icons-material/Face'
import NotificationPage from '../pages/map-steper/notificationPage'
import MapPage from '../pages/map-steper/mapPage'
import FacePage from '../pages/map-steper/facePage'
import { useJsApiLoader } from '@react-google-maps/api'

export default function Map() {
  const [page, setPage] = useState(1)
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  return (
    <div>
      {page === 1 ? (
        <MapPage isLoaded={isLoaded} />
      ) : page === 2 ? (
        <NotificationPage />
      ) : (
        <FacePage />
      )}
      <SegmentedButton
        onChange={setPage}
        className="segmented-button-custom"
        list={[
          {
            label: (
              <MapOutlinedIcon
                sx={{
                  fontSize: 30,
                  color: '#000000',
                  marginTop: '8px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
                key="1"
              />
            ),
            value: 1,
          },
          {
            label: (
              <NotificationsNoneIcon
                sx={{
                  fontSize: 30,
                  color: '#000000',
                  marginTop: '8px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
                key="2"
              />
            ),
            value: 2,
          },
          {
            label: (
              <FaceIcon
                sx={{
                  fontSize: 30,
                  color: '#000000',
                  marginTop: '8px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
                key="3"
              />
            ),
            value: 3,
          },
        ]}
      />
    </div>
  )
}
