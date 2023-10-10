INSERT INTO Temporada (id_temporada, fecha_inicio, fecha_fin)
VALUES (1, '2023-10-01', '2024-09-30'),  
       (2, '2022-10-01', '2023-09-30');

INSERT INTO Serie (id_serie, nombre_serie, caracter, Temporada_id_temporada)  
VALUES (1, 'Serie 1', 'Comedia', 1),
       (2, 'Serie 2', 'Drama', 2);
       
INSERT INTO Equipo (idEquipo, nombre_equipo, initial, equip_diret, color)
VALUES (1, 'Equipo A', 'EA', 'Juan Perez', 'Rojo'),    
       (2, 'Equipo B', 'EB', 'Maria Gomez', 'Azul');
       
INSERT INTO Pelotero (id_jugador, nombre, edad, anonn_exp, prom_bateo)
VALUES (1, 'Jugador 1', 25, 3, 0.300),
       (2, 'Jugador 2', 30, 5, 0.275);
       
INSERT INTO Lanzador (Pelotero_id_jugador, id_lanzador, cant_win, cant_over, mano, prom_carr_limpia)  
VALUES (1, 1, 5, '7', 'derecha', 2.50);

INSERT INTO Participaciones (Serie_id_serie, Equipo_idEquipo, Juegos_ganados, Juegos_Perdidos)
VALUES (1, 1, 5, 2),
       (1, 2, 2, 5);

-- Insertar en otras tablas...