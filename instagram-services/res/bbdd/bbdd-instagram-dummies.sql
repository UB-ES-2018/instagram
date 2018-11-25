INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (1, 'user1', '12345', 'user1@dummy.com', 'user1', 'bio user 1', 'hombre',231231,'photo1');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (2, 'user2', '12345', 'user2@dummy.com', 'user2', 'bio user 2', 'hombre',31241,'photo2');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (3, 'user3', '12345', 'user3@dummy.com', 'user3', 'bio user 3', 'hombre',321321,'photo3');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (4, 'user4', '12345', 'user4@dummy.com', 'user4', 'bio user 4', 'hombre',3231,'photo4');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (5, 'user5', '12345', 'user5@dummy.com', 'user5', 'bio user 5', 'hombre',536644,'photo5');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (6, 'user6', '12345', 'user6@dummy.com', 'user6', 'bio user 6', 'hombre',786556,'photo6');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (7, 'user7', '12345', 'user7@dummy.com', 'user7', 'bio user 7', 'hombre',987876,'photo7');
INSERT INTO USER(id, username, password, email, name, bio, gender,phoneNumber,photo) VALUES (8, 'user8', '12345', 'user8@dummy.com', 'user8', 'bio user 8', 'hombre',876567,'photo8');


INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(1,1,2,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(2,1,3,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(3,1,4,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(4,2,1,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(5,2,3,false);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(6,4,3,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(7,5,2,true);
INSERT INTO FOLLOWERS(id,id_follower,id_user,accepted) VALUES(8,1,6,false);

INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(1,1,'PHOTO01','DESC PHOTO 01','2015-12-17','2015-12-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(2,1,'PHOTO02','DESC PHOTO 02','2016-12-18','2018-11-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(3,1,'PHOTO03','DESC PHOTO 03','2017-10-17','2018-10-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(4,2,'PHOTO04','DESC PHOTO 04','2018-11-14','2018-05-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(5,2,'PHOTO05','DESC PHOTO 05','2018-07-20','2018-03-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(6,3,'PHOTO06','DESC PHOTO 06','2018-08-21','2018-11-18');
INSERT INTO POST(id,id_user,photo,description,created_at,updated_at) VALUES(7,6,'PHOTO07','DESC PHOTO 07','2018-09-22','2018-10-18');

INSERT INTO LIKES(id,id_user,id_post) VALUES(1,1,2);
INSERT INTO LIKES(id,id_user,id_post) VALUES(2,2,2);
INSERT INTO LIKES(id,id_user,id_post) VALUES(3,3,2);
INSERT INTO LIKES(id,id_user,id_post) VALUES(5,1,4);
INSERT INTO LIKES(id,id_user,id_post) VALUES(6,1,5);

INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(1,5,1,'COMENT1-5','2015-12-17','2015-12-18');
INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(2,6,1,'COMENT1-6','2015-12-17','2015-12-18');
INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(3,7,1,'COMENT1-7','2015-12-17','2015-12-18');
INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(4,8,2,'COMENT2-8','2015-12-17','2015-12-18');
INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(5,5,2,'COMENT2-5','2015-12-17','2015-12-18');
INSERT INTO COMENTS(id,id_user,id_post,content,created_at,updated_at) VALUES(6,6,3,'COMENT3-6','2015-12-17','2015-12-18');

INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(1,6,1);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(2,7,1);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(3,8,1);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(4,3,1);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(6,2,3);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(7,1,1);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(8,1,5);
INSERT INTO LIKESCOMENT(id,id_user,id_coment) VALUES(9,3,5);

INSERT INTO HASHTAG(id,tag) VALUES(1,'HASTAG1');
INSERT INTO HASHTAG(id,tag) VALUES(2,'HASTAG2');
INSERT INTO HASHTAG(id,tag) VALUES(3,'HASTAG3');
INSERT INTO HASHTAG(id,tag) VALUES(4,'HASTAG4');
INSERT INTO HASHTAG(id,tag) VALUES(5,'HASTAG5');

INSERT INTO POST_TAG(id,id_post,id_tag) VALUES(1,1,1);
INSERT INTO POST_TAG(id,id_post,id_tag) VALUES(2,2,5);
INSERT INTO POST_TAG(id,id_post,id_tag) VALUES(3,3,4);
INSERT INTO POST_TAG(id,id_post,id_tag) VALUES(4,4,3);
INSERT INTO POST_TAG(id,id_post,id_tag) VALUES(5,1,2);



