<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Meeting;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $usersCount = cache()->remember('users_count', now()->addHours(1), function () {
            return User::whereRole("user")->count();
        });

        $meetingsCount = cache()->remember('meetings_count', now()->addHours(1), function () {
            return Meeting::all()->count();
        });

        $loginsCount = cache()->remember('logins_count', now()->addHours(1), function () {
            return Activity::whereType('login')->count();
        });

        return Inertia::render('admin/dashboard/index', compact('usersCount', 'meetingsCount', 'loginsCount'));
    }

    public function users(Request $request)
    {
        $page = $request->query('page');
        $users = cache()->remember('users_page_' . $page ?? 1, now()->addHours(1), function () {
            return User::select(['id', 'name', 'email', 'image'])->whereRole("user")->paginate(7);
        });
        return Inertia::render('admin/users/index', compact('users'));
    }
}
