import { TextField } from "@mui/material";

const Input: React.FC = () => {
    
    return (
        <>
        <TextField
            fullWidth
            label = 'Имя пользователя'
            sx={{
                marginTop: '50px',
                    '& .MuiInputLabel-root': {
                        color: '#57606a',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#57606a', 
                    },
                    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                        color: '#57606a',
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: '#57606a',
                        },
                        '&:hover fieldset': {
                        borderColor: '#57606a',
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: '#57606a', 
                        },
                    },
                }}
        />
        </>
    )
}

export default Input;