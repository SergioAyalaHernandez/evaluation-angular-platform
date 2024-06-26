# Nombre del Proyecto: Plataforma de Aprendizaje Java

## Descripción
Este proyecto es una plataforma de aprendizaje enfocada en el lenguaje de programación Java, diseñada para ofrecer a los estudiantes y profesionales una herramienta integral para el desarrollo de sus habilidades en Java. La plataforma incluye lecciones detalladas, ejemplos de código, y evaluaciones para medir el progreso.

## Tecnologías Utilizadas
- **Angular**: Utilizado para el desarrollo del frontend, proporcionando una experiencia de usuario rica y dinámica.
- **TypeScript**: Lenguaje de programación principal para el desarrollo de Angular.
- **Tailwind CSS**: Framework de CSS utilizado para el diseño responsive y estilizado de la aplicación.
- **RxJS**: Biblioteca para programación reactiva con JavaScript, utilizada para manejar eventos y datos asíncronos.
- **HttpClientModule**: Módulo de Angular para realizar llamadas HTTP, interactuando con APIs externas.
- **Angular Router**: Utilizado para manejar la navegación entre diferentes componentes y proteger rutas.
- **DomSanitizer**: Servicio de Angular para prevenir ataques XSS, permitiendo la inserción segura de URLs en el DOM.

## Seguridad y Protección de Rutas
La plataforma protege las rutas utilizando el mecanismo de Guardias de Angular (Angular Guards). Estos guardias verifican si un usuario está autenticado antes de permitirle acceder a ciertas rutas. Si el usuario no está autenticado, se le redirige a la página de inicio de sesión.

```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

## Interceptor de Llamadas HTTP
Para interceptar las llamadas HTTP y añadir un token de autenticación (o realizar otras operaciones antes de que la solicitud llegue al servidor o la respuesta vuelva al cliente), se utiliza un Interceptor HTTP en Angular. Este interceptor añade el token de autenticación en los headers de cada solicitud HTTP si el usuario está autenticado.
```typescript
 @Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
 ```

## Cómo Iniciar el Proyecto
### Para iniciar el proyecto, asegúrate de tener instalado Node.js y el CLI de Angular. Luego, sigue estos pasos:

## Clona el repositorio.
 - Navega hasta la carpeta del proyecto y ejecuta npm install para instalar las dependencias.
 - Ejecuta ng serve para iniciar el servidor de desarrollo.
```json
 - Abre tu navegador y navega a http://localhost:4200/. 
 ```
 - Abre tu navegador y navega a http://localhost:4200/. 
 - Este README proporciona una visión general del proyecto, incluyendo las tecnologías utilizadas, cómo se maneja la seguridad y la protección de rutas, y cómo interceptar llamadas HTTP para añadir tokens de autenticación. 
