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

        if (!Auth::guard('student')->check()) {
            \Log::info('User is not authenticated');
            return redirect('/login');
        }

        \Log::info('User: ' . print_r(Auth::guard('student')->user(), true));
        \Log::info('User role: ' . Auth::guard('student')->user()->role);

        if (Auth::guard('student')->user()->role !== $role) {
            \Log::info('User role does not match required role');
            return redirect('/'); // Or another page
        }

        \Log::info('User role matches required role. Proceeding to next middleware/request.');
        return $next($request);
    }
}
