function StopWatch(){
    let duration = 0;

    Object.defineProperty(this , 'duration', {
        get: function(){
            return duration;
        },
        set: function(){
            throw new Error('Duration can not be set');
        }
    })

    let status = false;
   
    this.start = function(){
        if(status)
            throw new Error('StopWatch has already started');
        
        status = true;
        duration = performance.now();

    }
    this.stop = function(){
        if(!status)
            throw new Error('StopWatch already don not work');
            
        status = false;
        duration = performance.now() - duration;
    }
    this.reset = function(){
        status = false;
        duration = 0
    }
}