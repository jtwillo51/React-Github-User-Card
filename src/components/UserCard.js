import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

function UserCard({follower}) {
  
  return (
    <Card className="user-card">
      <CardImg top width="50%" src={follower.avatar_url} alt = "user"/>
      <CardBody>
        <CardTitle>{follower.login}</CardTitle>
        <Button href={follower.html_url}>See User</Button>
      </CardBody>
    </Card>
  );
}
export default UserCard;
