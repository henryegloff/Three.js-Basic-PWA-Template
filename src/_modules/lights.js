
import * as THREE from 'three';


function lights(scene) {

    const hemisphere_light = new THREE.HemisphereLight( 0xffffff, 0x111111, .5 ) 
    hemisphere_light.position.set( 0,1,0 )
    scene.add( hemisphere_light )

    const directional_light = new THREE.DirectionalLight( 0xffffff, 0.3 )
    directional_light.position.set( 0, 5, 0 )
    directional_light.castShadow = true
    directional_light.shadow.mapSize.width = 1024
    directional_light.shadow.mapSize.height = 1024
    directional_light.shadow.camera.far = 6
    directional_light.shadow.radius = 5
    directional_light.shadow.bias = - 0.00006
    scene.add( directional_light )


    // Helpers

    // const gridHelper = new THREE.GridHelper(10, 10, 0xffffff, 0xffffff)
    // scene.add(gridHelper)

    // const hemisphere_light_helper = new THREE.HemisphereLightHelper( hemisphere_light, 5 )
    // scene.add( hemisphere_light_helper )

    // const directional_light_helper = new THREE.DirectionalLightHelper( directional_light, 5 )
    // scene.add( directional_light_helper )

    // const directional_light_shadow_helper = new THREE.CameraHelper(directional_light.shadow.camera)
    // scene.add(directional_light_shadow_helper)


}


export default lights;