import TextField from '@mui/material/TextField'

function Input({ label, placeholder, variant = "outlined", sx, multiline, rows, ref, name, id }: {
   label?: string,
   placeholder?: string,
   variant?: "outlined" | "filled" | "standard",
   sx?: any
   multiline?: boolean
   rows?: number,
   ref?: React.Ref<HTMLDivElement>,
   name?: string,
   id?: string
}) {
   return (
      <TextField fullWidth label={label} variant={variant} placeholder={placeholder} multiline={multiline} rows={rows} ref={ref} name={name} id={id} sx={{
         mb: 2,
         color: 'var(--text)',
         '& .MuiOutlinedInput-root': {
            '& fieldset': {
               borderColor: 'var(--border)',
            },
            '&:hover fieldset': {
               borderColor: 'var(--secondary)',
            },
            '&.Mui-focused fieldset': {
               borderColor: 'var(--primary)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
               borderColor: 'var(--primary)',
            },
         },

         '& .MuiInputLabel-root': {
            color: 'var(--secondary)',
         },

         '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--primary)',
         },

         '& .MuiInputBase-root': {
            color: 'var(--text)',

            '&::after': {
               borderColor: 'var(--primary)',
            },
         },
         ...sx
      }} />
   )
}

export default Input