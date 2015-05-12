module.exports  = function( bower , grunt , tool , log , callback ) {
    var self    = this;
    log( "start load bootstrap" );
    bower.commands
        .install( [ "bootstrap" ] , { save : true } )
        .on( "end" , function( installed ){
            tool.file.copy( self.bowerDir + "bootstrap/dist/css" , self.cwd + "src/css/lib" );
            tool.file.copy( self.bowerDir + "bootstrap/dist/font" , self.cwd + "src/css/lib" );
            tool.file.copy( self.bowerDir + "bootstrap/dist/js" , self.cwd + "src/js/bootstrap" );
            log( "bootstrap init success" );
            callback();
        } );
}