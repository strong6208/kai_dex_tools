import React from "react"
import { useTranslation } from "react-i18next"

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
} from "src/UILibrary"

export interface FieldDefinition<T> {
  attribute: string
  label: string
  width?: number
  widget?: React.FC<{ value?: any; row?: T }>
}

function getProperty(obj: any, field: string): any {
  let value = obj
  let attrs = field.split(".")
  let f = attrs.shift()
  while (value && f) {
    value = value[f]
    f = attrs.shift()
  }
  return value
}

interface AdvancedTableParams<T> {
  content: T[]
  fields: FieldDefinition<T>[]
  idField?: string
  variant?: "pagination" | "next-previous"
  pagination?: {
    count: number
    currentPage: number
  }
}

export const UserTable = <T extends Record<string, any>>({
  content,
  fields,
  idField = "id",
  variant = "pagination",
  pagination,
}: AdvancedTableParams<T>) => {
  const { t } = useTranslation()

  return (
    <TableContainer sx={{ width: "auto", mt: "1.6875rem" }}>
      <Table size="small" sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow
            sx={{
              "&>th": {
                textAlign: "center",
                color: "background.paper",
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: "1.5rem",
                p: 0,
                borderWidth: "0 2px 0 0",
                borderStyle: "solid",
                bgcolor: "text.secondary",
                "&:first-of-type": {
                  borderRadius: "9px 0 0 0",
                },
                "&:last-of-type": {
                  borderRadius: "0 9px 0 0",
                },
              },
              overflow: "scroll",
            }}
          >
            {fields.map((field) => (
              <TableCell key={field.label} sx={{ width: field.width }}>
                {t(field.label)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row) => (
            <TableRow
              key={row[idField]}
              sx={{
                cursor: "pointer",
                "&>td": {
                  borderWidth: 0,
                  textAlign: "center",
                  "&:not(:last-of-type)": {
                    p: "0.5rem",
                    borderWidth: "0 2px 2px 0",
                    borderStyle: "solid",
                    borderColor: "info.light",
                    borderRightWidth: "2px",
                    borderLeftWidth: "2px",
                  },
                },
              }}
            >
              {fields.map((f) => (
                <TableCell
                  key={`cell-${f.attribute}`}
                  sx={{
                    backgroundColor: "background.default",
                    width: f.width,
                  }}
                >
                  {f.widget ? (
                    f.widget({ value: getProperty(row, f.attribute), row: row })
                  ) : (
                    <Typography.Action
                      sx={{
                        color: "text.primary",
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {getProperty(row, f.attribute)}
                    </Typography.Action>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {variant === "pagination" && pagination && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "0.375rem" }}>
          <Pagination count={pagination.count} page={pagination.currentPage} color="primary" />
        </Box>
      )}
    </TableContainer>
  )
}
