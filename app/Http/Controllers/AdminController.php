<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Meeting;
use App\Models\User;
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
}
