import {useTheme} from "@mui/material";
import {Box,Typography} from "@mui/material";
import {shades } from "../../theme";


const Footer = () =>{

    const {
        palette: { neutral},
    } = useTheme();

    return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 25%, 30%)">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                >
                ECOMMER
                </Typography>
                <div>
                    Tienda MC proyecto personal Ecomerce.
                </div>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    About us
                </Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Term & Conditions</Typography>
                <Typography mb="30px">Privacy</Typography>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Customer care
                </Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Orders</Typography>
                <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                <Typography mb="30px">Returns & Refunds</Typography>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">Barcelona 2023, s/n </Typography>
                <Typography mb="30px">Email: mcshop@gmail.com</Typography>
                <Typography mb="30px">777777777</Typography>
            </Box>



        </Box>


    </Box>
}

export default Footer;