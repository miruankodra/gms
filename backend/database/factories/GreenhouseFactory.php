<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Greenhouse>
 */
class GreenhouseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'country' => fake()->country(),
            'city' => fake()->city(),
            'type' => fake()->text(),
            'area' => fake()->numberBetween(50,500),
            'location' => fake()->address(),
        ];
    }
}
