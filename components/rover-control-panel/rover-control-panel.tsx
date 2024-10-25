"use client"

import { Input, Button, FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui";
import { RoverControlPanelProps } from "./types";

const RoverControlPanel = ({ form, onSubmit, onReset }: RoverControlPanelProps) => {
    return (
        <section className="w-full max-w-lg py-4 px-6 border shadow-md rounded-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="plateauX"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plateau X</FormLabel>
                                    <FormControl>
                                        <Input disabled type="number" placeholder="Plateau X" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="plateauY"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plateau Y</FormLabel>
                                    <FormControl>
                                        <Input disabled type="number" placeholder="Plateau Y" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="initialPosition"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Initial Position</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Initial Position (Eg: 12N)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="roverMovements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rover Movements</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Rover Movements (Eg: MLR)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-center gap-3">
                        <Button type="submit" className="w-full max-w-xs h-10 mt-0 bg-green-500 text-white hover:bg-green-600">Start</Button>
                        <Button type="button" onClick={onReset} className="w-full max-w-xs h-10 mt-0 bg-red-500 text-white hover:bg-red-600">Reset</Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}

export default RoverControlPanel;