import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/mockData";

const ListagemDespesas = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "valor",
            headerName: "Valor",
            headerAlign: "center",
            align: "right",
        },
        {
            field: "descricao",
            headerName: "Descrição",
            flex: 1,
            cellClassName: "center name-column--cell",
            headerAlign: "center",
            align: "center",
        },
        {
            field: "data",
            headerName: "Data",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },

        // { field: "id", headerName: "ID" },
        // {
        //     field: "name",
        //     headerName: "Name",
        //     flex: 1,
        //     cellClassName: "center name-column--cell",
        // },
        // {
        //     field: "age",
        //     headerName: "Age",
        //     type: "number",
        //     headerAlign: "left",
        //     align: "left",
        // },
        // {
        //     field: "phone",
        //     headerName: "Phone Number",
        //     flex: 1,
        // },
        // {
        //     field: "email",
        //     headerName: "Email",
        //     flex: 1,
        // },
        // {
        //     field: "accessLevel",
        //     headerName: "Access Level",
        //     flex: 1,
        //     renderCell: ({ row: { access } }) => {
        //         return (
        //             <Box
        //                 width="60%"
        //                 m="0 auto"
        //                 p="5px"
        //                 display="flex"
        //                 justifyContent="center"
        //                 backgroundColor={
        //                     access === "admin"
        //                         ? colors.greenAccent[600]
        //                         : access === "manager"
        //                         ? colors.greenAccent[700]
        //                         : colors.greenAccent[700]
        //                 }
        //                 borderRadius="4px"
        //             >
        //                 {access === "admin" && (
        //                     <AdminPanelSettingsOutlinedIcon />
        //                 )}
        //                 {access === "manager" && <SecurityOutlinedIcon />}
        //                 {access === "user" && <LockOpenOutlinedIcon />}
        //                 <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        //                     {access}
        //                 </Typography>
        //             </Box>
        //         );
        //     },
        // },
    ];

    return (
        <Box m="20px">
            <Header title="Despesas" subtitle="Listagem de despesas" />
            <Box display="flex" justifyContent="First" mt="20px">
                <Button color="secondary" variant="contained">
                    incluir
                </Button>
            </Box>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    // checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default ListagemDespesas;
