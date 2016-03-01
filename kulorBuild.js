var path    = require( "path" );
module.exports  = function( bower , grunt , tool , log , callback ) {
    var self    = this;
    log( "start load bootstrap" );
    bower.commands
        .install( [ "bootstrap" ] , { save : true } )
        .on( "end" , function( installed ){
            tool.file.copy( path.resolve( self.bowerDir , "bootstrap/dist/css" ) , path.resolve( self.cwd , "src/css/lib" ) , true );
            tool.file.copy( path.resolve( self.bowerDir , "bootstrap/dist/fonts" ) , path.resolve( self.cwd , "src/css/fonts" ) , true );
            tool.file.copy( path.resolve( self.bowerDir , "bootstrap/dist/js" ) , path.resolve( self.cwd , "src/js/bootstrap" ) , true );
            log( "bootstrap init success" );
            callback();
        } );
}