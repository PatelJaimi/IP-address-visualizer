<template>
    <div>
        <div class="headerInfo">
            <!-- change theme -->
            <div class="hdrtoogle">
                <div class="container">
                    <div class="position-relative">
                        <div class="togleInfo position-absolute">
                            <input type="checkbox" class="checkbox" id="checkbox">
                            <label for="checkbox" class="label">                          
                                <div class='ball'></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header -->
            <div class="container">                
                <div class="d-lg-flex d-block align-items-baseline mt-md-3">
                    <div class="logo">
                        <h1>CIDR.xyz</h1>
                    </div>
                    <div class="hdrTxt ms-lg-3">
                        <p>An Interactive IP address and CIDR range visualizer</p>
                    </div>
                </div>
                <div class="cidrTxt d-md-block d-none">
                    <p class="m-0">
                        <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing" target="_blank">CIDR</a> 
                        is a notation for describing blocks of IP addresses and is used heavily in various networking configurations. 
                        IP addresses contain 4 octets, each consisting of 8 bits giving values between 0 and 255. 
                        The decimal value that comes after the slash is the number of bits consisting of the routing prefix. 
                        This in turn can be translated into a  netmask, and also designates how many available addresses are in the block.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
     
}
</script>
