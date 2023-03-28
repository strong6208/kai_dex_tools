import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import {
  Box,
  Button,
  DownloadIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "src/UILibrary"
import { UserTable, FieldDefinition } from "src/components/userTable"
import { SearchBox } from "../applicationList/components/searchBox"

import { Student } from "src/types/student"
import { PAGE_SIZE } from "src/constants/common"
import { MOCK_STUDENT_DATA } from "./mockstudent"

const studentData: Student[] = MOCK_STUDENT_DATA

const fields: FieldDefinition<Student>[] = [
  {
    attribute: "id",
    label: "login.id",
    width: 40,
  },
  {
    attribute: "name",
    label: "mypage.name",
  },
  {
    attribute: "hiragana",
    label: "mypage.furigana",
  },
  {
    attribute: "birth",
    label: "user_list.birth",
    width: 80,
  },
  {
    attribute: "phone",
    label: "mypage.phone",
    width: 80,
  },
  {
    attribute: "post_number",
    label: "mypage.postal_code",
    width: 60,
  },
  {
    attribute: "address",
    label: "mypage.address",
    width: 90,
  },
  {
    attribute: "grade",
    label: "user_list.grade",
    width: 40,
  },
  {
    attribute: "class",
    label: "user_list.class",
    width: 45,
  },
  {
    attribute: "attend_number",
    label: "user_list.attend_bumber",
    width: 80,
  },
  {
    attribute: "house",
    label: "user_list.house",
  },
  {
    attribute: "extra_activity",
    label: "user_list.extra_activity",
    width: 80,
  },
  {
    attribute: "curriculum",
    label: "user_list.curriculum",
    width: 90,
  },
  {
    attribute: "enrolled_sibling",
    label: "user_list.enrolled_sibling",
    width: 80,
  },
  {
    attribute: "parent",
    label: "application.parent",
    width: 80,
  },
  {
    attribute: "parent_phone",
    label: "user_list.parent_phone",
  },
]

export const StudentList: React.FC = () => {
  const { t } = useTranslation()
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE[0])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            justifyContent: "space-between",
            mt: "1rem",
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
              backgroundColor: "info.contrastText",
              borderRadius: "0.1875rem",
              mt: "3.125rem",
              p: "0.5625rem 2rem",
            }}
          >
            <Typography.Title
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                lineHeight: "0.875rem",
                mr: "1rem",
              }}
            >
              {t("user_list.csv_download")}
            </Typography.Title>
            <DownloadIcon sx={{ width: "20px", height: "20px" }} />
          </Button>
        </Box>
        <UserTable
          fields={fields}
          content={studentData}
          pagination={{ count: 10, currentPage: 1 }}
        />
      </Box>
    </Box>
  )
}
