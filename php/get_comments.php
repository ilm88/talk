<?php
  $page_id = 150;// Уникальный идентификатор страницы (статьи или поста)
  include 'config.php';
  $result_set = $mysqli->query("SELECT * FROM `say` WHERE `page_id`='$page_id'"); //Вытаскиваем все комментарии для данной страницы
  while ($row = $result_set->fetch_assoc()) {
    #echo "<pre>";
    #print_r($row); //Вывод комментариев
    #echo "</pre>";
    #echo json_encode($row);
    #echo ($row);
    echo " " . $row['name'] . " сказал.", "  " . $row['text_comment'],PHP_EOL;
    #echo "<br />";
    }
