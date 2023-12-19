/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';

const CustomTextField = ({
    inputRef,
    value,
    onChange,
    onKeyDown,
}) => {
    return (
        <TextField
            inputRef={inputRef}
            style={{ cursor: 'pointer', width: 300 }}
            className="m-0 p-0"
            value={value}
            onChange={onChange}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    onKeyDown && onKeyDown(event);
                }
            }}
            variant="outlined"
            label="Digite um texto"
            placeholder="Digite um texto para gerar o QRcode"
            multiline
            width={300}
            maxRows={6}
        />
    );
};

export default CustomTextField;
