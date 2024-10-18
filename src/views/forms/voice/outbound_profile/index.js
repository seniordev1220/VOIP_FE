import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    IconButton,
    Tooltip,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Chip,
    DialogActions,
    Switch
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MainCard from 'ui-component/cards/MainCard';
import { color } from '@mui/system';

// Columns definition, including the new 'action' column
const columns = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 80,
        align: 'left'
    },
    {
        id: 'serviceplan',
        label: 'Service Plan',
        minWidth: 120,
        align: 'center'
    },
    {
        id: 'payment',
        label: 'Payment Method',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'billinggroup',
        label: 'Billing Group',
        minWidth: 120,
        align: 'center'
    },
    {
        id: 'connection',
        label: 'Connection/Apps',
        minWidth: 120,
        align: 'center'
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 100,
        align: 'center'
    }
];

// Table data
function createData(name, status, serviceplan, payment, billinggroup, connection) {
    return { name, status, serviceplan, payment, billinggroup, connection };
}

const rows = [
    createData('Francis Tremblay', 1, 'Global', 'Rate Deck', 'BILL_AROBASINFORMATIQUE', 4),
    createData('Ron Desroches', 1, 'Global', 'Rate Deck', 'BILL_NORDOUESTELECTRIQUE', 3),
    createData('Roberto Bilodeau', 3, 'Global', 'Rate Deck', 'BILL_OLIVIERTELECOM', 4),
    createData('Dave Lepage', 3, 'Global', 'Rate Deck', 'BILL_OLIVIERTELECOM', 0),
    createData('Frederick Guy', 1, 'Global', 'Rate Deck', '-', 0),
    createData('Devon Turner', 3, 'Global', 'Rate Deck', 'BILL_AROBASINFORMATIQUE', 10),
    createData('Carey Donnelly', 3, 'Global', 'Rate Deck', '-', 5),
    createData('Conrad Ouimet', 3, 'Global', 'Rate Deck', 'BILL_OLIVIERTELECOM', 1),
    createData('Russ Hutchinson', 3, 'Global', 'Rate Deck', '-', 0),
    createData('Will Potvin', 3, 'dGlobal', 'Rate Deck', '-', 10),
    createData('Yvon French', 1, 'dGlobal', 'Rate Deck', 'BILL_AROBASINFORMATIQUE', 3),
    createData('Wade Burke', 1, 'dGlobal', 'Rate Deck', 'BILL_NORDOUESTELECTRIQUE', 7),
    createData('Philippe Allan', 1, 'dGlobal', 'Rate Deck', '-', 6),
    createData('Wei Harding', 1, 'dGlobal', 'Rate Deck', 'BILL_OLIVIERTELECOM', 3),
    createData('Jon Boyd', 1, 'dGlobal', 'Rate Deck', '-', 4),
    createData('Trent Leduc', 1, 'dGlobal', 'Rate Deck', 'BILL_OLIVIERTELECOM', 2),
    createData('Chi Gravel', 3, 'dGlobal', 'Rate Deck', 'BILL_NORDOUESTELECTRIQUE', 0),
    createData('Duncan Guay', 1, 'dGlobal', 'Rate Deck', '-', 2)
];

// Main component
export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event?.target?.value);
        setPage(0);
    };

    const handleEdit = (row) => {
        // Navigate to edit page or perform edit action
        navigate(`/edit/${row.code}`);
    };

    const handleDelete = (row) => {
        setOpenDialog(row);
        setSelectedRow(true);
    };

    const handleNewProfile = () => {
        navigate('/voice/outbound_profile/create');
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedRow(null);
    };

    const handleConfirmDelete = () => {
        console.log(`Deleting row: $(selectedRow.name)`);
        handleCloseDialog();
    };

    return (
        <MainCard content={false}>
            <Box display="flex" justifyContent="flex-end" pr={4} mt={4}>
                <Button
                    variant="contained"
                    sx={{
                        background: '#6cbd45',
                        '&:hover': { background: '#6cbd35' }
                    }}
                    onClick={handleNewProfile}
                >
                    Add New Profile
                </Button>
            </Box>
            {/* table */}
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell sx={{ py: 3 }} key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                    const value = row[column.id];

                                    if (column.id === 'status') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {row.status === 1 && <Chip label="Complete" size="small" color="success" />}
                                                {row.status === 3 && <Chip label="Processing" size="small" color="primary" />}
                                            </TableCell>
                                        );
                                    }

                                    if (column.id === 'action') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                <Stack direction="row" spacing={1} justifyContent="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton onClick={() => handleEdit(row)} size="small">
                                                            <EditIcon sx={{ fontSize: 20 }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Available">
                                                        <Switch checkedChildren="Enable" unCheckedChildren="Disable" defaultChecked />
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton onClick={() => handleDelete(row)} size="small" sx={{ color: 'red' }}>
                                                            <DeleteIcon color="red" sx={{ fontSize: 20 }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </TableCell>
                                        );
                                    }

                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* table pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent> Are you sure you want to delete {selectedRow?.name}? </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </MainCard>
    );
}
