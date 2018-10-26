INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (1, 'user1', '12345', 'user1@dummy.com', 'user1', 'bio user 1', 'hombre',231231);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (2, 'user2', '12345', 'user2@dummy.com', 'user2', 'bio user 2', 'hombre',31241);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (3, 'user3', '12345', 'user3@dummy.com', 'user3', 'bio user 3', 'hombre',321321);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (4, 'user4', '12345', 'user4@dummy.com', 'user4', 'bio user 4', 'hombre',23144313231);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (5, 'user5', '12345', 'user5@dummy.com', 'user5', 'bio user 5', 'hombre',536644);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (6, 'user6', '12345', 'user6@dummy.com', 'user6', 'bio user 6', 'hombre',786556);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (7, 'user7', '12345', 'user7@dummy.com', 'user7', 'bio user 7', 'hombre',987876);
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber) VALUES (8, 'user8', '12345', 'user8@dummy.com', 'user8', 'bio user 8', 'hombre',876567);


INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(1,1,2,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(2,1,3,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(3,1,4,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(4,2,1,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(5,2,3,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(6,4,3,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(7,5,2,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(8,1,6,false);

