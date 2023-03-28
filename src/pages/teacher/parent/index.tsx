import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from "src/UILibrary"
import { ApplicationListTable } from "src/components/applicationTable"

import { PAGE_SIZE } from "src/constants/common"
import { Application } from "src/types/application"
import { SearchBox } from "../applicationList/components/searchBox"
import { MOCK_APPLICATION_DATA } from "../applicationList/mockdata"

const applicationData: Application[] = MOCK_APPLICATION_DATA

export const ParentList: React.FC = () => {
  const { t } = useTranslation()
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE[0])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1098px",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "1.125rem",
            pl: "1.25rem",
            pr: "2rem",
            borderRadius: "9px 9px 0px 0px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.dark",
              borderRadius: "0.5625rem",
              mt: "0.8125rem",
              mb: "0.8125rem",
            }}
          >
            <Typography.Title
              sx={{ fontWeight: 500, fontSize: "20px", textAlign: "center", lineHeight: "1.5rem" }}
            >
              {t("application.proxy_application")}
            </Typography.Title>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "0.6875rem",
            pr: "2rem",
            width: "100%",
          }}
        >
          <Box>
            <SearchBox />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "0.9375rem",
                ml: "1.25rem",
                gap: "1.125rem",
              }}
            >
              <Typography.Detail>1~50/500</Typography.Detail>
              <Typography.Detail>{t("application.display_count")}</Typography.Detail>
              <Select
                value={displayCount}
                sx={{
                  height: "24px",
                  "& .MuiSelect-select": {
                    py: 0,
                    bgcolor: "background.paper",
                    borderWidth: 0,
                  },
                }}
                onChange={(e: SelectChangeEvent<unknown>) =>
                  setDisplayCount(e.target.value as number)
                }
              >
                {PAGE_SIZE.map((item, index) => (
                  <MenuItem key={index} value={item}>{`${item}件`}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.dark",
              borderRadius: "0.5625rem",
              mt: "2.125rem",
            }}
          >
            <Typography.Title
              sx={{ fontWeight: 500, fontSize: "20px", textAlign: "center", lineHeight: "1.5rem" }}
            >
              {t("application.bulk_approval")}
            </Typography.Title>
          </Button>
        </Box>
        <ApplicationListTable
          applicationData={applicationData}
          pagination={{ count: 10, currentPage: 1 }}
        />
      </Box>
    </Box>
  )
}
