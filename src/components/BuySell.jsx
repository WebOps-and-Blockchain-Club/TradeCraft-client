/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function ButSell() {
  return (
    <Tabs defaultValue="account" className="w-[400px] text-white ">
      <TabsList className=" grid w-full grid-cols-2 bg-slate-800 border-gray-500 font-semibold">
        <TabsTrigger className="text-white font-semibold " value="account">Buy</TabsTrigger>
        <TabsTrigger className="text-white font-semibold " value="password">Sell</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="bg-slate-900">
        <Card className="bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>NHPC</CardTitle>
            <CardDescription>₹98.15 (+0.77%) Depth</CardDescription>
          </CardHeader>
          <hr className="border-gray-500 mb-3" />
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Quantity</Label>
              <Input id="name" defaultValue="" className="text-black" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Price Limit</Label>
              <Input id="username" defaultValue="" className="text-black" />
            </div>
            <div className="text-xs text-center pt-16">
              Order will be executed at the ₹90 or lower price
            </div>
            <hr className="border-gray-500" />
            <div className="flex justify-between items-center text-xs">
              <div>Balance : ₹1000</div>
              <div>Required : ₹1000</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-900 hover:bg-blue-500">
              Buy
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>NHPC</CardTitle>
            <CardDescription>₹98.15 (+0.77%) Depth</CardDescription>
          </CardHeader>
          <hr className="border-gray-500 mb-3" />
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Quantity</Label>
              <Input id="name" defaultValue="" className="text-black" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Price Limit</Label>
              <Input id="username" defaultValue="" className="text-black" />
            </div>
            <div className="text-xs text-center pt-16">
              Order will be executed at the ₹90 or lower price
            </div>
            <hr className="border-gray-500" />
            <div className="flex justify-between items-center text-xs">
              <div>Balance : ₹1000</div>
              <div>Required : ₹1000</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-900 hover:bg-blue-500">
              Sell
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default ButSell;
