Pts.namespace( window );

(function() {

  /** 
   * Option 1: a single one-liner
   */
//   Pts.quickStart( "#pt", "#e2e6ef" )( t => form.point( space.pointer, 10 ) );
  
  
  /** 
   * Option 2: Same quickStart mode, but storing the animate function in a `run` variable.
   */
//   let run = Pts.quickStart( "#pt", "#ff99ee" );
//   run( (time, ftime)  => { form.point( space.pointer, 10 ); });


  /** 
   * Option 3: Using quickStart to initiate space and form variables, then add a player to space.
   */
//   Pts.quickStart( "#pt", "#ee99ff" );
//   space.add( {
//     animate: (time, ftime) => { form.point( space.pointer, 10 ); }
//   });

  
  /** 
   * Option 4: Advanced mode to initiate space and form, allowing for more options
   */
  var space = new Pts.CanvasSpace("#pt").setup({ bgcolor: "#99eeff", retina: true, resize: true });
  var form = space.getForm();
//   space.add( (time, ftime) => {
//     let radius = Num.cycle( (time%1000)/1000 ) * 20;
//     form.fill("red").point( space.pointer, radius, "circle" );
//   });
  space.add( {
    start: (bound) => {},

    animate: (time, ftime) => {
        // let radius = Num.Pts.cycle( (time%1000)/1000) * 20;
      form.point( space.pointer, 50, "circle" );
    },

    action: (type, x, y) => {}
  });


  space.bindMouse().bindTouch().play();

})();
