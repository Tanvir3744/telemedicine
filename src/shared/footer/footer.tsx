import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Facebook from '../../assets/landing_page/facebook.png'
import Instagram from '../../assets/landing_page/instagram.png'
import LinkedIn from '../../assets/landing_page/linkedin.png'
import Twitter from '../../assets/landing_page/twitter.png'

const footer = () => {
    return (
       <Box style={{backgroundColor:"#1e272e"}}>
        <Container >
            <Stack direction="row" justifyContent="space-around" py={6} fontWeight={600}>
                <Typography component="p" color="#ffff">Consulation</Typography>
                <Typography component="p" color="#ffff">Health Plans</Typography>
                <Typography component="p" color="#ffff">Medicine</Typography>
                <Typography component="p" color="#ffff">Diagnostics</Typography>
            </Stack>
            {/* social icons here */}

            <Stack direction="row" justifyContent="center" gap={4} alignItems="center">
            <Image src={Facebook} width={30} height={30} alt='facebook_icon'></Image>
            <Image src={Instagram} width={30} height={30} alt='facebook_icon'></Image>
            <Image src={LinkedIn} width={30} height={30} alt='facebook_icon'></Image>
            <Image src={Twitter} width={30} height={30} alt='facebook_icon'></Image>
            </Stack>
            <div style={{borderBottom:"2px dashed #f1f1f1", paddingTop:16}} ></div>
            <Stack direction="row" justifyContent="space-around">
                <Typography color="#f1f1f1" py={2} component="p">&copy 2024 Biplob Hossen. All Rights Reserve</Typography>
                <Typography display="flex" color="#f1f1f1" fontWeight={800}  py={2} component="h2">BIPLOB <Box gap={2} color="primary.main">HOSSEN</Box></Typography>
                <Typography color="#f1f1f1" py={2} component="p">Privacy Policy | Terms & Conditions</Typography>
            </Stack>
        </Container>
       </Box>
    );
};

export default footer;