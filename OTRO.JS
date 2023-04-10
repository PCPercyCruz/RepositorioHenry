var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 mascota.info();
