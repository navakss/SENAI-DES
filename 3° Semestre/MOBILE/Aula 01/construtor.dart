void main() {
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    Animal vaca = new Animal(2, "Mimosa", "Bovino", "Angus", 399.9);
    Animal gato = new Animal(3, "Tico", "Felino", "Angorá", 1.9);
    Animal gata = new Animal(4, "Mimi", "Felino", "Vira Latas", 1.2);
    Animal cachorro = new Animal(5, "Totó", "Canino", "Caramelo", 10.9);
    Animal cadela = new Animal(6, "Layca", "Canino", "Xitus", 2.9);
    Animal cavalo = new Animal(7, "Furacão", "Equino", "Manga Larga", 459.9);
    Animal egua = new Animal(8, "Pocotó", "Equino", "Pangaré", 320.9);
    
    print(boi.tudoJunto());
    print(vaca.tudoJunto());
    print(gato.tudoJunto());
    print(gata.tudoJunto());
    print(cachorro.tudoJunto());
    print(cadela.tudoJunto());
    print(cavalo.tudoJunto());
    print(egua.tudoJunto());
}