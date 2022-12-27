import { FC } from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";

interface iCardComponent {
  title: string;
  description: string;
  apr: number;
  balanceTransfer: number;
  purchaseOffer: number;
  credit: number;
}

const CardComponent: FC<iCardComponent> = ({
  title,
  description,
  apr,
  balanceTransfer,
  purchaseOffer,
  credit,
}) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack component="ul">
          <Typography component="li">apr: {apr} %</Typography>
          <Typography component="li">
            Balance Transfer Offer Duration: {balanceTransfer}
          </Typography>
          <Typography component="li">
            Purchase Offer Duration: {purchaseOffer}
          </Typography>
          <Typography component="li">Credit Available: {credit}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
