Модуль для загрузки файлов к ресурсам в менеджере сайта

- Поддерживается ограничение доступа к загрузке и скачиванию политиками;
- Есть административное управление всеми загруженными файлами на сайте;
- Для обзора загруженных файлов есть медиа источник, он доступен при глобальной регистрации пакета во время установки;
- Список файлов хранится в таблице

К каждому файлу можно указывать описание, режим приватности (доступность по прямой ссылке), количество скачиваний, контрольную сумму SHA1.

Файлы доступны для скачивания по прямой ссылке. Для "закрытых" файлов генерируется длинное название, не соответствующее изначальному имени файла.
У "открытых" файлов имя сохраняется.

Произвольный порядок файлов в списке можно задать перетягиванием записей в редакторе на нужное место.

Поддерживает работу в СУБД MySQL и SQLSrv DB.

Разработка компонента ведется на странице: [https://github.com/13hakta/FileAttach](https://github.com/13hakta/FileAttach)

## Чанк FileAttachTpl

Позволяет задать произвольное оформление для вывода записей файлов.

| Название           | Описание                                               |
| ------------------ | ------------------------------------------------------ |
| **&description**   | Описание                                               |
| **&docid**         | Идентификатор ресурса, для которого загружен файл      |
| **&download**      | Количество скачиваний                                  |
| **&hash**          | Контрольная сумма SHA1                                 |
| **&id**            | Идентификатор файла                                    |
| **&internal_name** | Внутреннее имя. Содержит имя файла в файловой системе  |
| **&name**          | Имя файла. Совпадает с internal_name когда private=нет |
| **&path**          | Путь внутри медиа источника                            |
| **&private**       | Признак закрытости файла                               |
| **&rank**          | Порядок в списке. Можно использовать для сортировки    |
| **&size**          | Размер файла в байтах                                  |

Изначальное содержание чанка:

```php
<p>[[+description:notempty=`<strong>[[+description]]</strong><br/>`]]
<a href="[[+url]]">[[+name]]</a> <span class="badge">[[+download]]</span>
[[+size:notempty=`<br/><small>Size: [[+size]] bytes</small>`]]
[[+hash:notempty=`<br/><small>SHA1: [[+hash]]</small>`]]</p>
```

## Сниппет FileAttach

Выводит список файлов.

| Название             | Значение по умолчанию | Описание                                                                                                   |
| -------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| **&limit**           | 0                     | Ограничение вывода файлов на странице. Если не указано, то вывод всех прикрепленных файлов                 |
| **&makeURL**         | false                 | Создавать ссылку для скачивания файла                                                                      |
| **&outputSeparator** |                       | Разделитель вывода записей                                                                                 |
| **&privateUrl**      | false                 | Форсировать использование обработчик скачиваний, что позволяет считать скачивания даже для открытых файлов |
| **&resource**        | 0                     | Показать файлы для документа с номером id, если не указано, то вывод только для текущего документа         |
| **&showSize**        | false                 | Получать размер файла                                                                                      |
| **&sortBy**          | name                  | Сортировать по полю                                                                                        |
| **&sortDir**         | ASC                   | Направление сортировки                                                                                     |
| **&toPlaceholder**   | false                 | Сохранять результат в плейсхолдер, вместо прямого вывода на странице                                       |
| **&tpl**             | FileAttachTpl         | Чанк оформления каждого ряда файлов                                                                        |

## Класс FileItem

### Методы

| Название         | Описание                                                     | Параметры         |
| ---------------- | ------------------------------------------------------------ | ----------------- |
| **generateName** | Сгенерировать новое имя файла                                | length (int) = 32 |
| **getFullPath**  | Получить полный путь к файлу                                 |                   |
| **getPath**      | Получить путь к файлу относительно корня медиа источника     |                   |
| **getSize**      | Получить размер файла                                        |                   |
| **getUrl**       | Получить ссылку на файл                                      |                   |
| **rename**       | Переименовать файл                                           | name (str)        |
| **sanitizeName** | Отфильтровать недопустимые комбинации символов в имени файла | name (str)        |
| **setPrivate**   | Установить режим приватности                                 | private (bool)    |

## Системные настройки

| Название         | Значение по умолчанию | Описание                                                                                   |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| **calchash**     | false                 | Вычислять контрольную сумму SHA1 при загрузке файла                                        |
| **download**     | true                  | Считать количество скачиваний                                                              |
| **files_path**   | Путь                  | Путь файла относительно корня медиа источника. Завершается на "/".                         |
| **mediasource**  | 1                     | Идентификатор медиа источника                                                              |
| **private**      | false                 | Делать файл закрытым при загрузке                                                          |
| **put_docid**    | false                 | Размещать файл в подкаталоге ресурса                                                       |
| **templates**    |                       | Список шаблонов документов, в которых будет активирован модуль. Перечисление через запятую |
| **user_folders** | false                 | Размещать файл в подкаталоге пользователя                                                  |

## Коннектор для скачивания файлов

Закрытые файлы скачиваются через коннектор, что позволяет скрыть прямую ссылку на файл и произвести подсчет количества скачиваний.
Можно скачивать открытые файлы через коннектор, указав в вызове сниппета **&privateUrl**=`1`, при этом коннектор сделает перенаправление
на прямую ссылку.

Ссылка на коннектор имеет вид: `MODX_ASSETS_URL/components/fileattach/connector.php?action=web/download&ctx=web&id=file_id`,
где file_id - порядковый номер файла в таблице БД.

## Политики доступа

### Список разрешений

| Название                 | Описание                       |
| ------------------------ | ------------------------------ |
| **fileattach.doclist**   | Управление файлами в документе |
| **fileattach.download**  | Возможность скачивать файлы    |
| **fileattach.totallist** | Управление всеми файлами       |

## Пример использования

В простом случае можно просто вызвать сниппет:

```php
[[FileAttach]]
```

Чтобы для всех файлов считалось количество скачиваний надо чтобы они открывались через приватную ссылку:

```php
[[FileAttach? &privateUrl=`1`]]
```

Сортировка по порядку, заданному вручную:

```php
[[FileAttach? &sortby=`rank`]]
```

## Снимки экрана

- Список файлов в менеджере
[![Список файлов в менеджере](http://modstore.pro/assets/uploadify/7/d/0/7d0f1263e99423f3aafb4d4acfadab1es.jpg)](http://modstore.pro/assets/uploadify/7/d/0/7d0f1263e99423f3aafb4d4acfadab1e.png)

- Дерево медиа источника
[![Дерево медиа источника](http://modstore.pro/assets/uploadify/7/e/c/7ec6d5cfd2eda4b6beecacbb9dccf137s.jpg)](http://modstore.pro/assets/uploadify/7/e/c/7ec6d5cfd2eda4b6beecacbb9dccf137.jpg)

- Редактирование файла
[![Редактирование файла](http://modstore.pro/assets/uploadify/a/7/3/a73f632567a372e4798d4e8a46e6ed66s.jpg)](http://modstore.pro/assets/uploadify/a/7/3/a73f632567a372e4798d4e8a46e6ed66.jpg)

- Редактирование файла в административном режиме
[![Редактирование файла в административном режиме](http://modstore.pro/assets/uploadify/1/1/e/11e65bc91ab8d98697fa7131d1ef0dces.jpg)](http://modstore.pro/assets/uploadify/1/1/e/11e65bc91ab8d98697fa7131d1ef0dce.jpg)

- Список файлов в фронтенде сайта
[![Список файлов в фронтенде сайта](http://modstore.pro/assets/uploadify/7/d/0/7d0f1263e99423f3aafb4d4acfadab1es.jpg)](http://modstore.pro/assets/uploadify/7/d/0/7d0f1263e99423f3aafb4d4acfadab1e.png)

- Окно загрузки
[![Окно загрузки](http://modstore.pro/assets/uploadify/d/8/e/d8e762da9506a5a6b17bf895e7b9b512s.jpg)](http://modstore.pro/assets/uploadify/d/8/e/d8e762da9506a5a6b17bf895e7b9b512.png)