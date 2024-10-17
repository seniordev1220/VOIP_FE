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
    DialogActions
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
        id: 'email',
        label: 'Email Address',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'sipprovider',
        label: 'SIP Provider',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'joindate',
        label: 'Created',
        minWidth: 170,
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
function createData(name, email, sipprovider, joindate) {
    return { name, email, sipprovider, joindate };
}

const rows = [
    createData('Francis Tremblay', 'demo1@example.com', 'Twillio', '10-17-2024'),
    createData('Ron Desroches', 'demo2@example.com', 'Telnyx', '10-17-2024'),
    createData('Roberto Bilodeau', 'demo3@example.com', 'Twillio', '10-17-2024'),
    createData('Dave Lepage', 'demo4@example.com', 'Twillio', '10-17-2024'),
    createData('Frederick Guy', 'demo5@example.com', 'Telnyx', '10-17-2024'),
    createData('Devon Turner', 'demo6@example.com', 'Twillio', '10-17-2024'),
    createData('Carey Donnelly', 'demo7@example.com', 'Telnyx', '10-17-2024'),
    createData('Conrad Ouimet', 'demo8@example.com', 'Telnyx', '10-17-2024'),
    createData('Russ Hutchinson', 'demo9@example.com', 'Twillio', '10-17-2024'),
    createData('Will Potvin', 'demo10@example.com', 'Twillio', '10-17-2024'),
    createData('Yvon French', 'demo11@example.com', 'Telnyx', '10-17-2024'),
    createData('Wade Burke', 'demo12@example.com', 'Telnyx', '10-17-2024'),
    createData('Philippe Allan', 'demo13@example.com', 'Twillio', '10-17-2024'),
    createData('Wei Harding', 'demo14@example.com', 'Telnyx', '10-17-2024'),
    createData('Jon Boyd', 'demo15@example.com', 'Twillio', '10-17-2024'),
    createData('Trent Leduc', 'demo16@example.com', 'Telnyx', '10-17-2024'),
    createData('Chi Gravel', 'demo17@example.com', 'Twillio', '10-17-2024'),
    createData('Duncan Guay', 'demo18@example.com', 'Telnyx', '10-17-2024')
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

    const handleAddReseller = () => {
        navigate('/forms/add_new_reseller');
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
                    onClick={handleAddReseller}
                >
                    Add New Reseller
                </Button>
            </Box>
            {/* table */}
            <TableContainer sx={{ maxHeight: 440 }}>
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

                                    if (column.id === 'action') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                <Stack direction="row" spacing={1} justifyContent="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton onClick={() => handleEdit(row)} size="small">
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton onClick={() => handleDelete(row)} size="small" sx={{ color: 'red' }}>
                                                            <DeleteIcon color="red" />
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
