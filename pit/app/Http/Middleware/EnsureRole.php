<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class EnsureRole
{
    public function handle($request, Closure $next, $role)
    {
        \Log::info('EnsureRole middleware is working');
        \Log::info('Role: ' . $role);

        $guards = [
            'student' => 'student',
            'department_staff' => 'department_staff',
            'cashier' => 'cashier',
            'registrar' => 'registrar',
            'admission_handler' => 'admission_handler',
        ];

        $authenticated = false;

        foreach ($guards as $guardName => $guard) {
            if (Auth::guard($guard)->check()) {
                \Log::info("Authenticated with guard: $guard");
                \Log::info('User: ' . print_r(Auth::guard($guard)->user(), true));
                \Log::info('User role: ' . Auth::guard($guard)->user()->role);

                if (Auth::guard($guard)->user()->role === $role) {
                    \Log::info('User role matches required role. Proceeding to next middleware/request.');
                    return $next($request);
                } else {
                    \Log::info('User role does not match required role');
                    return redirect('/');
                }
            }
        }

        \Log::info('User is not authenticated');
        return redirect('/login');
    }
}
