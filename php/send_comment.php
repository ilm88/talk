<?php
  /* Принимаем данные из формы */
  $name = trim($_POST["name"]);
  $page_id = trim($_POST["page_id"]);
  $text_comment = trim($_POST["text_comment"]);
  $name = htmlspecialchars($name);// Преобразуем спецсимволы в HTML-сущности

  if($name == ''){
    echo "Введите имя! ";
}
  if($text_comment == ''){
    echo "Заполните комментарий!";
}
  $text_comment = htmlspecialchars($text_comment);// Преобразуем спецсимволы в HTML-сущности
  include 'config.php';
  $mysqli->query("INSERT INTO `say` (`name`, `page_id`, `text_comment`) VALUES ('$name', '$page_id', '$text_comment')");// Добавляем комментарий в таблицу
