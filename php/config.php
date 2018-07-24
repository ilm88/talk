<?php
$mysqli = new mysqli("localhost", "alex", "2109", "talk");// Подключается к базе данных
if (mysqli_connect_errno()) {
  echo "Подключение невозможно: ".mysqli_connect_error();
  }
