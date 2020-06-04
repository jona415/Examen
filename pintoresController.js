// se declara mongoose para llamar a la db
const  mongoose  =  require ( 'mangosta' ) ;
// se enlaza mongoose al modelo
let  pintores  =  require ( '../models/pintores' ) ;

deja  pintoresController  =  { } ;

// listar = buscar
pintoresController . list  =  ( req , res ) => {
    pintores . encontrar ( { } )
        . límite ( 20 )
        . saltar ( 0 )
        . exec ( ( err , pintor ) => {
            // si existe un error, imprimirlo
            si ( err ) {
                consola . log ( 'Error:' , err ) ;
            }
            res . render ( '../views/index' , {
                pintores : pintor ,
                titulo : "Listado de pintores" ,
                fecha : nueva  Fecha ( Fecha . ahora ( ) )
        } )
        } )

} ;
// Controlador exportador
módulo . exportaciones  =  pintoresController ;
