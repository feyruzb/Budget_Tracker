<?php

namespace App\Http\Controllers;

use App\Models\budget;
use App\Http\Requests\StorebudgetRequest;
use App\Http\Requests\UpdatebudgetRequest;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return budget::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorebudgetRequest $request)
    {
        return budget::create($request->validated());
        
    }

    /**
     * Display the specified resource.
     */
    public function show(budget $budget)
    {
        return $budget;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatebudgetRequest $request, budget $budget)
    {
        return tap($budget)->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(budget $budget)
    {
        $budget->delete();
        return response()->noContent();
    }
}
