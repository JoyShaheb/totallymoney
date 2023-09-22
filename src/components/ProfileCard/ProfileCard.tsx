import { FC } from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import { JobStatusEnum } from "../../types/enums";

interface iProfileCard {
  name: string;
  location?: string;
  job: JobStatusEnum;
  salary: number;
}

const ProfileCard: FC<iProfileCard> = ({ job, name, salary, location }) => {
  return (
    <Card sx={{ width: "300px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job}
        </Typography>
        <Stack mt={1.5}>
          <Typography variant="body1">Annual Income : $ {salary}</Typography>
          {location && (
            <Typography variant="body1">Location : {location}</Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
