var viewer = new JSC3D.Viewer(document.getElementById('logo3d'));
var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
viewer.setParameter('SceneUrl',         'logo.obj');
viewer.setParameter('ModelColor',       randomColor);
viewer.setParameter('Background',		'off');
viewer.setParameter('RenderMode',       'smooth');
viewer.setParameter('MipMapping',       'on');
viewer.setParameter('Renderer',		    'webgl');
// viewer.setParameter('ProgressBar',       'off');
viewer.setParameter('InitRotationX',    Math.random()*180);
viewer.setParameter('InitRotationY',    Math.random()*180);
viewer.setParameter('InitRotationZ',    Math.random()*180);
viewer.init();
viewer.update();

var l3x = $(".logo3d-container").offset().left;
var l3y = $(".logo3d-container").offset().top;
