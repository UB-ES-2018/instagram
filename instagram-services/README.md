//// INSTALL DOCKER 

	curl -fsSL get.docker.com -o get-docker.sh
	sh get-docker.sh

(en este video explican como instalar docker)
https://www.udemy.com/iniciando-con-containers-en-docker/learn/v4/t/lecture/7191216?start=0


//// INSTALL GRADLE

	sudo add-apt-repository ppa:cwchien/gradle
	sudo apt-get update
	sudo apt upgrade gradle

//// Deben tener Java Instalado


//// para generar la base de datos con el docker (primera vez)

    docker run --name instagram-mysql \
         -e MYSQL_ROOT_PASSWORD=root \
         -d mysql:5.7

si el docker se apaga solo basta con escribir (segunda vez)

	docker start instagram-mysql

(comprobar estado del docker)

	docker ps

//// instalar IDE eclipse

una vez este todo instaldo deben poner los siguientes comandos en la terminal de la carpeta que contiene el proyecto del servidor

    gradle clean
    gradle eclipse

/////
