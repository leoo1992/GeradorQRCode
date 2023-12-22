/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';

const CustomTextField = ({
    inputRef,
    value,
    onChange,
    onKeyDown,
    disabled,
}) => {

    const purpleBorderStyle = {
        border: '3px solid #3949ab',
        fontFamily: 'Alkatra',
        cursor: 'pointer',
    };

    const WolfFont = {
        fontFamily: 'Alkatra',
        cursor: 'pointer',
        width: 230
    };

    const handleDivClick = () => {
        inputRef.current && inputRef.current.focus();
    };

    return (

        <div className='bg-light m-0 p-3 rounded-5 text-white shadow-sm' style={purpleBorderStyle} onClick={handleDivClick}>
            <TextField
                id="textFields"
                name="textFields"
                inputRef={inputRef}
                style={WolfFont}
                disabled={disabled}
                className="m-0 p-0 shadow-sm bg-body rounded-5 text-white"
                color="secondary"
                value={value}
                onChange={onChange}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        onKeyDown && onKeyDown(event);
                    }
                }}
                size="small"
                variant="outlined"
                label="Digite um texto"
                placeholder="Digite para gerar o QRcode"
                multiline
                width={300}
                maxRows={6}
                minLength={1}
                maxLength={2000}
            />
        </div>

    );
};

export default CustomTextField;
