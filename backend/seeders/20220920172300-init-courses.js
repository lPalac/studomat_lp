'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('courses', [{id:1,   ime:'Linearna algebra',kod:'SIT001', program: 'Program nije unesen', bodovi: 5, semestar_redovni:1, semestar_izvanredni:1, izborni:'ne'},
   {id:2,   ime:'Fizika', kod:'SIT002', program: 'Program nije unesen', bodovi:6, semestar_redovni:1, semestar_izvanredni:3, izborni:'ne'},
   {id:3,   ime:'Osnove elektrotehnike', kod:'SIT003', program: 'Program nije unesen', bodovi:6, semestar_redovni:1, semestar_izvanredni:1, izborni:'ne'},
   {id:4,   ime:'Digitalna i mikroprocesorska tehnika', kod:'SIT004', program: 'Program nije unesen', bodovi:7, semestar_redovni:1, semestar_izvanredni:2, izborni:'ne'},
   {id:5,   ime:'Uporaba računala', kod:'SIT005', program: 'Program nije unesen',bodovi: 4, semestar_redovni:1, semestar_izvanredni:1, izborni:'ne'},
   {id:6,   ime:'Engleski jezik 1', kod:'SIT006', program: 'Program nije unesen', bodovi:2, semestar_redovni:1, semestar_izvanredni:1, izborni:'ne'},
   {id:7,   ime:'Analiza 1', kod:'SIT007', program: 'Program nije unesen', bodovi:7, semestar_redovni:2, semestar_izvanredni:2, izborni:'ne'},
   {id:8,   ime:'Osnove elektronike', kod:'SIT008', program: 'Program nije unesen', bodovi:6, semestar_redovni:2, 2, izborni:'ne'},
   {id:9,   ime:'Arhitektura i organizacija digitalnih računala', kod:'SIT009', program: 'Program nije unesen', bodovi:7, semestar_redovni:2, semestar_izvanredni:3, izborni:'ne'},
   {id:10,  ime: 'Uvod u programiranje', kod:'SIT010', program: 'Program nije unesen', bodovi:8, semestar_redovni:2, semestar_izvanredni:3, izborni:'ne'},
   {id:11,  ime:'Engleski jezik 2', kod:'SIT011', program: 'Program nije unesen', bodovi:2, semestar_redovni:2, semestar_izvanredni:2, izborni:'ne'},
   {id:12,  ime:'Primijenjena i numerička matematika', kod:'SIT012', program: 'Program nije unesen', bodovi:6, semestar_redovni:3, semestar_izvanredni:4, izborni:'ne'},
   {id:13,  ime:'Programske metode i apstrakcije', kod:'SIT013', program: 'Program nije unesen', bodovi:8, semestar_redovni:3, semestar_izvanredni:4, izborni:'ne'},
   {id:14,  ime:'Baze podataka', kod:'SIT014', program: 'Program nije unesen', bodovi:6, semestar_redovni:3, semestar_izvanredni:5, izborni:'ne'},
   {id:15,  ime:'Informacijski sustavi', kod:'SIT015', program: 'Program nije unesen', bodovi:6, semestar_redovni:3, semestar_izvanredni:4, izborni:'ne'},
   {id:16,  ime:'Tehnički Engleski jezik', kod:'SIT016', program: 'Program nije unesen', bodovi:4, semestar_redovni:3, semestar_izvanredni:5, izborni:'ne'},
   {id:17,  ime:'Računalne mreže', kod:'SIT017', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:5, izborni:'ne'},
   {id:18,  ime:'Operacijski sustavi', kod:'SIT018', program: 'Program nije unesen', bodovi:5,semestar_redovni: 4, semestar_izvanredni:5, izborni:'ne'},
   {id:19,  ime:'Strukture podataka i algoritmi', kod:'SIT019', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:20,  ime:'Objektno programiranje', kod:'SIT020', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:21,  ime:'Baze podataka 2', kod:'SIT021', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:22,  ime:'Mrežne usluge i programiranje', kod:'SIT022', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:23,  ime:'Arhitektura osobnih računala', kod:'SIT023', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:24,  ime:'Projektiranje i upravljanje računalnim mrežama', kod:'SIT024', program: 'Program nije unesen', bodovi:5, semestar_redovni:4,semestar_izvanredni: 6, izborni:'da'},
   {id:25,  ime:'Projektiranje informacijskih sustava', kod:'SIT025', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:26,  ime:'Informatizacija poslovanja', kod:'SIT026', program: 'Program nije unesen', bodovi:5, semestar_redovni:4, semestar_izvanredni:6, izborni:'da'},
   {id:27,  ime:'Ekonomika i organizacija poduzeća', kod:'SIT027', program: 'Program nije unesen', bodovi:2, semestar_redovni:5, semestar_izvanredni:7, izborni:'ne'},
   {id:28,  ime:'Analiza 2', kod:'SIT028', program: 'Program nije unesen', bodovi:6, semestar_redovni:5, semestar_izvanredni:7, izborni:'ne'},
   {id:29,  ime:'Industrijska praksa', kod:'SIT029', program: 'Program nije unesen', bodovi:2, semestar_redovni:5, semestar_izvanredni:7, izborni:'ne'},
   {id:30,  ime:'Arhitektura poslužiteljskih računala', kod:'SIT030', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:31,  ime:'Sigurnost računala i podataka', kod:'SIT031', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:32,  ime:'Programski alati na UNIX računalima', kod:'SIT032', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:33,  ime:'Napredno Windows programiranje', kod:'SIT033', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:34,  ime:'Objektno orijentirano modeliranje', kod:'SIT034', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:35,  ime:'Programiranje u Javi', kod:'SIT035', program: 'Program nije unesen',bodovi: 5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:36,  ime:'Programiranje na Internetu', kod:'SIT036', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:37,  ime:'Elektroničko poslovanje', kod:'SIT037', program: 'Program nije unesen', bodovi:5, semestar_redovni:5, semestar_izvanredni:7, izborni:'da'},
   {id:38,  ime:'Diskretna matematika', kod:'SIT038', program: 'Program nije unesen', bodovi:6, semestar_redovni:6, semestar_izvanredni:8, izborni:'ne'},
   {id:39,  ime:'Upravljanje poslužiteljskim računalima', kod:'SIT039', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:40,  ime:'Programiranje u C#', kod:'SIT040', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:41,  ime:'Društveni informacijski sustavi', kod:'SIT041', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:42,  ime:'Oblikovanje Web stranica', kod:'SIT042', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:43,  ime:'Vođenje projekata i dokumentacija', kod:'SIT043', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:44,  ime:'Informatizacija proizvodnje', kod:'SIT044', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:45,  ime:'Analiza i obrada podataka', kod:'SIT045', program: 'Program nije unesen', bodovi:5, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:46,  ime:'Njemački jezik', 'SSZP40', program: 'Program nije unesen', bodovi:4, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:47,  ime:'Talijanski jezik', 'SSZP50', program: 'Program nije unesen', bodovi:4, semestar_redovni:6, semestar_izvanredni:8, izborni:'da'},
   {id:48,  ime:'Završni rad', kod:'SIT046', program: 'Program nije unesen', bodovi:8, semestar_redovni:6, semestar_izvanredni:8, izborni:'ne'}])
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
