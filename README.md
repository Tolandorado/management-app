--установка значения последовательности (sequence) для столбца Task, который использует автоинкремент. С этим пришлось немного потупить 

SELECT setval(pg_get_serial_sequence('"Task"', 'id'), coalesce(max(id)+1, 1), false) FROM "Task"; 
