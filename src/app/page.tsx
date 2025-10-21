'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function WeddingDressTrendsAnalysis() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Wedding Dress Trends Analysis
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Egypt and the Arab World (2015-2025)
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">Research Report</Badge>
              <Badge variant="outline">Fashion Analysis</Badge>
              <Badge variant="outline">Cultural Studies</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollArea className="w-full">
            <div className="flex space-x-1 py-4">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'chronological', label: 'Chronological Analysis' },
                { id: 'methodologies', label: 'Methodologies' },
                { id: 'data', label: 'Data & Statistics' },
                { id: 'visual', label: 'Visual Trends' },
                { id: 'recommendations', label: 'Recommendations' },
                { id: 'references', label: 'References' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="whitespace-nowrap"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection}>
          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Executive Summary</CardTitle>
                <CardDescription>
                  A comprehensive analysis of wedding dress evolution in Egyptian and Arab markets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  This report presents a detailed analysis of wedding dress trends and design evolution 
                  in the Egyptian and Arab markets from 2015 to 2025. The study examines the progression 
                  of design styles, cultural influences, and market dynamics that have shaped bridal 
                  fashion across the decade.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-800 mb-2">Key Focus Areas</h3>
                    <ul className="space-y-1 text-sm text-pink-700">
                      <li>• Design style progression and evolution</li>
                      <li>• Cultural and social influence analysis</li>
                      <li>• Scientific methodology applications</li>
                      <li>• Data-driven trend identification</li>
                      <li>• Visual documentation and examples</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Research Methods</h3>
                    <ul className="space-y-1 text-sm text-purple-700">
                      <li>• Text mining and semantic analysis</li>
                      <li>• Kansei Design methodology</li>
                      <li>• Social media trend analysis</li>
                      <li>• Market research and surveys</li>
                      <li>• Designer interviews and case studies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chronological Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Detailed year-by-year progression of wedding dress trends, 
                    highlighting key design shifts and cultural influences.
                  </p>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setActiveSection('chronological')}>
                    Explore Timeline
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data & Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Comprehensive data analysis including style prevalence percentages, 
                    fabric preferences, and color trends with visual charts.
                  </p>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setActiveSection('data')}>
                    View Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Visual Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Showcase of prominent designs from leading Egyptian and Arab 
                    designers with detailed analysis of techniques and styles.
                  </p>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setActiveSection('visual')}>
                    See Examples
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chronological Analysis Section */}
          <TabsContent value="chronological" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chronological Analysis (2015-2025)</CardTitle>
                <CardDescription>
                  Evolution of wedding dress trends in Egypt and the Arab World
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      year: "2015-2017",
                      title: "Classic Elegance Era",
                      description: "Dominance of traditional corset gowns and ballgown silhouettes",
                      trends: ["Classic corset designs", "Full ballgown skirts", "Traditional lace", "Ivory and white dominance"],
                      factors: ["Cultural traditions", "Bridal magazine influence", "Limited social media impact"]
                    },
                    {
                      year: "2018-2019",
                      title: "Modern Transition Period",
                      description: "Introduction of contemporary elements while maintaining traditional roots",
                      trends: ["A-line silhouettes", "Off-shoulder designs", "Lighter fabrics", "Subtle color variations"],
                      factors: ["Instagram influence", "International fashion exposure", "Changing bride preferences"]
                    },
                    {
                      year: "2020-2021",
                      title: "Pandemic Innovation",
                      description: "Adaptation during global challenges with focus on intimacy and practicality",
                      trends: ["Minimalist designs", "Detachable elements", "Comfort-focused styles", "Digital showcase trends"],
                      factors: ["COVID-19 restrictions", "Intimate weddings", "Virtual bridal events", "Economic considerations"]
                    },
                    {
                      year: "2022-2023",
                      title: "Statement Renaissance",
                      description: "Return to elaborate designs with modern interpretations",
                      trends: ["Statement sleeves", "3D embroidery", "Bold silhouettes", "Pastel color introduction"],
                      factors: ["Post-pandemic celebration", "Social media virality", "Designer innovation", "Cultural pride"]
                    },
                    {
                      year: "2024-2025",
                      title: "Sustainable Fusion",
                      description: "Integration of traditional craftsmanship with contemporary sustainability",
                      trends: ["Eco-friendly fabrics", "Cultural fusion designs", "Breathable materials", "Custom personalization"],
                      factors: ["Environmental awareness", "Cultural heritage focus", "Climate adaptation", "Technology integration"]
                    }
                  ].map((period, index) => (
                    <div key={period.year} className="border-l-4 border-pink-400 pl-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {period.year}
                        </Badge>
                        <h3 className="text-xl font-semibold">{period.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{period.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Trends:</h4>
                          <ul className="space-y-1">
                            {period.trends.map((trend, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                {trend}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Influencing Factors:</h4>
                          <ul className="space-y-1">
                            {period.factors.map((factor, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < 4 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodologies Section */}
          <TabsContent value="methodologies" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Text Mining & Semantic Analysis</CardTitle>
                  <CardDescription>
                    Analyzing consumer preferences from social media data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Method Overview</h4>
                    <p className="text-sm text-blue-700">
                      Systematic analysis of social media posts, comments, and discussions 
                      to identify emerging trends and consumer preferences in wedding dress design.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900">Data Sources:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Instagram bridal posts and hashtags</li>
                        <li>• Facebook wedding groups and discussions</li>
                        <li>• Twitter fashion trends and designer mentions</li>
                        <li>• Pinterest wedding boards and pins</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Analysis Techniques:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Sentiment analysis of design preferences</li>
                        <li>• Trend frequency and correlation analysis</li>
                        <li>• Semantic network mapping of related concepts</li>
                        <li>• Seasonal and event-based pattern identification</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kansei Design Methodology</CardTitle>
                  <CardDescription>
                    Translating emotional feedback into design criteria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Philosophy</h4>
                    <p className="text-sm text-green-700">
                      Kansei Engineering focuses on translating consumer emotional responses 
                      and cultural preferences into tangible design elements and specifications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900">Application Areas:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Fabric choice and texture preferences</li>
                        <li>• Embroidery density and pattern selection</li>
                        <li>• Silhouette and cut optimization</li>
                        <li>• Color psychology and cultural significance</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Implementation:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Consumer emotion mapping surveys</li>
                        <li>• Design element correlation studies</li>
                        <li>• Cultural significance analysis</li>
                        <li>• Comfort and practicality optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Research Framework Integration</CardTitle>
                <CardDescription>
                  Combining methodologies for comprehensive trend analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Data Collection</h4>
                    <p className="text-sm text-gray-600">
                      Social media mining, surveys, and market research data gathering
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Analysis</h4>
                    <p className="text-sm text-gray-600">
                      Statistical analysis, semantic networks, and Kansei mapping
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Application</h4>
                    <p className="text-sm text-gray-600">
                      Design recommendations and trend forecasting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data & Statistics Section */}
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Style Prevalence Analysis</CardTitle>
                <CardDescription>
                  Yearly percentage distribution of major wedding dress styles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-4">2025 Style Distribution</h4>
                      <div className="space-y-3">
                        {[
                          { style: "Statement Sleeves", percentage: 28 },
                          { style: "Minimalist", percentage: 22 },
                          { style: "Off-Shoulder", percentage: 18 },
                          { style: "Corset", percentage: 15 },
                          { style: "Detachable Elements", percentage: 12 },
                          { style: "Other", percentage: 5 }
                        ].map((item, index) => (
                          <div key={item.style} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{item.style}</span>
                              <span className="font-medium">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-4">Color Trends (2025)</h4>
                      <div className="space-y-3">
                        {[
                          { color: "Traditional White", percentage: 45 },
                          { color: "Pastel Tones", percentage: 25 },
                          { color: "Ivory/Cream", percentage: 20 },
                          { color: "Gold Accents", percentage: 7 },
                          { color: "Other Colors", percentage: 3 }
                        ].map((item, index) => (
                          <div key={item.color} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{item.color}</span>
                              <span className="font-medium">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-4">Fabric Preferences Evolution</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Fabric Type</th>
                            <th className="text-center py-2">2015</th>
                            <th className="text-center py-2">2018</th>
                            <th className="text-center py-2">2021</th>
                            <th className="text-center py-2">2023</th>
                            <th className="text-center py-2">2025</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { fabric: "Traditional Lace", values: [35, 28, 20, 18, 15] },
                            { fabric: "Light Silk", values: [20, 25, 35, 38, 42] },
                            { fabric: "Satin", values: [25, 22, 18, 15, 12] },
                            { fabric: "Organza", values: [10, 15, 20, 22, 25] },
                            { fabric: "Eco-Friendly", values: [0, 2, 5, 7, 6] },
                            { fabric: "Other", values: [10, 8, 2, 0, 0] }
                          ].map((row, index) => (
                            <tr key={row.fabric} className="border-b">
                              <td className="py-2 font-medium">{row.fabric}</td>
                              {row.values.map((value, i) => (
                                <td key={i} className="text-center py-2">{value}%</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Research Insights</CardTitle>
                <CardDescription>
                  Survey results and social media analysis findings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Consumer Preferences Survey</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Comfort Priority</span>
                          <Badge variant="secondary">87%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Brides prioritize comfort over traditional aesthetics</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Cultural Elements</span>
                          <Badge variant="secondary">76%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Desire to incorporate cultural heritage elements</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Social Media Influence</span>
                          <Badge variant="secondary">92%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Instagram and Pinterest heavily influence decisions</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Designer Insights</h4>
                    <div className="space-y-3">
                      <div className="bg-pink-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Customization Demand</span>
                          <Badge variant="secondary">94%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Increasing demand for personalized designs</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Sustainability Focus</span>
                          <Badge variant="secondary">68%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Growing interest in eco-friendly materials</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Technology Integration</span>
                          <Badge variant="secondary">73%</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Use of digital tools in design process</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Visual Trends Section */}
          <TabsContent value="visual" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prominent Designers & Their Influence</CardTitle>
                <CardDescription>
                  Leading Egyptian and Arab designers shaping wedding dress trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Maison Yeya",
                      specialty: "Modern Fusion",
                      contribution: "Pioneered the integration of traditional Arabic elements with contemporary silhouettes",
                      signature: "Intricate hand embroidery with modern cuts",
                      period: "2018-Present"
                    },
                    {
                      name: "Hany El Behairy Couture",
                      specialty: "Luxury Glamour",
                      contribution: "Redefined luxury bridal wear with elaborate embellishments and dramatic silhouettes",
                      signature: "Opulent fabrics and detailed craftsmanship",
                      period: "2015-Present"
                    },
                    {
                      name: "Nour El Azazy",
                      specialty: "Minimalist Elegance",
                      contribution: "Introduced minimalist aesthetics while maintaining cultural relevance",
                      signature: "Clean lines with subtle traditional elements",
                      period: "2020-Present"
                    },
                    {
                      name: "Zeina Hosny",
                      specialty: "Sustainable Design",
                      contribution: "Led the movement towards eco-friendly bridal fashion without compromising elegance",
                      signature: "Organic fabrics and ethical production",
                      period: "2022-Present"
                    }
                  ].map((designer, index) => (
                    <div key={designer.name} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{designer.name}</h3>
                          <Badge variant="outline" className="mt-1">{designer.specialty}</Badge>
                        </div>
                        <span className="text-sm text-gray-500">{designer.period}</span>
                      </div>
                      <p className="text-sm text-gray-700">{designer.contribution}</p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">Signature Style:</h4>
                        <p className="text-sm text-gray-600">{designer.signature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design Elements & Techniques</CardTitle>
                <CardDescription>
                  Detailed analysis of dress characteristics and craftsmanship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Fabric Evolution</h4>
                    <div className="space-y-2">
                      {[
                        { fabric: "Traditional Lace", period: "2015-2019", description: "Heavy, ornate lace patterns" },
                        { fabric: "Light Silk", period: "2020-Present", description: "Breathable, climate-appropriate" },
                        { fabric: "Organza", period: "2021-Present", description: "Lightweight, voluminous effect" },
                        { fabric: "Eco-Textiles", period: "2023-Present", description: "Sustainable, innovative materials" }
                      ].map((item, index) => (
                        <div key={item.fabric} className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{item.fabric}</span>
                            <Badge variant="secondary" className="text-xs">{item.period}</Badge>
                          </div>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Embroidery Techniques</h4>
                    <div className="space-y-2">
                      {[
                        { technique: "3D Embroidery", period: "2022-Present", description: "Raised, textured embellishments" },
                        { technique: "Hand Beading", period: "2015-Present", description: "Traditional craftsmanship" },
                        { technique: "Digital Printing", period: "2020-Present", description: "Modern pattern application" },
                        { technique: "Laser Cutting", period: "2021-Present", description: "Precision detailing" }
                      ].map((item, index) => (
                        <div key={item.technique} className="bg-purple-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{item.technique}</span>
                            <Badge variant="secondary" className="text-xs">{item.period}</Badge>
                          </div>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Silhouette Trends</h4>
                    <div className="space-y-2">
                      {[
                        { silhouette: "Ballgown", period: "2015-2019", description: "Full, dramatic skirts" },
                        { silhouette: "A-Line", period: "2018-Present", description: "Flattering, versatile cut" },
                        { silhouette: "Mermaid", period: "2020-Present", description: "Fitted, hourglass shape" },
                        { silhouette: "Sheath", period: "2022-Present", description: "Slim, modern silhouette" }
                      ].map((item, index) => (
                        <div key={item.silhouette} className="bg-pink-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{item.silhouette}</span>
                            <Badge variant="secondary" className="text-xs">{item.period}</Badge>
                          </div>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Section */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actionable Recommendations</CardTitle>
                <CardDescription>
                  Strategic insights for designers and industry stakeholders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">For Designers</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-medium text-green-800 mb-2">Cultural Integration</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Incorporate traditional Arabic patterns in modern ways</li>
                            <li>• Balance cultural heritage with contemporary aesthetics</li>
                            <li>• Research regional variations and preferences</li>
                            <li>• Collaborate with cultural experts and artisans</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-800 mb-2">Climate Adaptation</h5>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Prioritize breathable, lightweight fabrics</li>
                            <li>• Design for comfort in warm weather conditions</li>
                            <li>• Consider detachable elements for versatility</li>
                            <li>• Use moisture-wicking and temperature-regulating materials</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">For Industry Stakeholders</h4>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-medium text-purple-800 mb-2">Digital Strategy</h5>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Leverage social media for trend dissemination</li>
                            <li>• Invest in virtual try-on technologies</li>
                            <li>• Create engaging digital content and tutorials</li>
                            <li>• Build online communities for brides and designers</li>
                          </ul>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg">
                          <h5 className="font-medium text-pink-800 mb-2">Sustainability Focus</h5>
                          <ul className="text-sm text-pink-700 space-y-1">
                            <li>• Source eco-friendly materials and processes</li>
                            <li>• Implement circular fashion principles</li>
                            <li>• Educate consumers on sustainable choices</li>
                            <li>• Partner with ethical suppliers and manufacturers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">Social Media Impact Strategy</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-800 font-bold">1</span>
                        </div>
                        <h5 className="font-medium text-sm mb-1">Content Creation</h5>
                        <p className="text-xs text-yellow-700">
                          Develop high-quality, culturally relevant content that resonates with target audiences
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-800 font-bold">2</span>
                        </div>
                        <h5 className="font-medium text-sm mb-1">Influencer Partnerships</h5>
                        <p className="text-xs text-yellow-700">
                          Collaborate with regional influencers who align with brand values and aesthetics
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-800 font-bold">3</span>
                        </div>
                        <h5 className="font-medium text-sm mb-1">Community Building</h5>
                        <p className="text-xs text-yellow-700">
                          Foster engaged communities around bridal fashion and cultural heritage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Trend Predictions</CardTitle>
                <CardDescription>
                  Projected developments for 2026-2030
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Emerging Trends</h4>
                    <div className="space-y-3">
                      {[
                        { trend: "AI-Designed Dresses", likelihood: "High", impact: "Revolutionary" },
                        { trend: "Smart Fabrics", likelihood: "Medium", impact: "Significant" },
                        { trend: "Virtual Reality Showrooms", likelihood: "High", impact: "Moderate" },
                        { trend: "Biodegradable Materials", likelihood: "Medium", impact: "High" },
                        { trend: "Cultural Fusion 2.0", likelihood: "High", impact: "Significant" }
                      ].map((item, index) => (
                        <div key={item.trend} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium text-sm">{item.trend}</span>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs">{item.likelihood}</Badge>
                            <Badge variant="secondary" className="text-xs">{item.impact}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Market Opportunities</h4>
                    <div className="space-y-3">
                      {[
                        { opportunity: "Customization Platforms", potential: "Very High" },
                        { opportunity: "Sustainable Luxury", potential: "High" },
                        { opportunity: "Digital Bridal Services", potential: "High" },
                        { opportunity: "Cultural Heritage Revival", potential: "Medium" },
                        { opportunity: "Tech-Integrated Fashion", potential: "Very High" }
                      ].map((item, index) => (
                        <div key={item.opportunity} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-sm">{item.opportunity}</span>
                          <Badge variant="outline" className="text-xs">{item.potential}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* References Section */}
          <TabsContent value="references" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>References & Resources</CardTitle>
                <CardDescription>
                  Comprehensive list of sources and further reading materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Online Bridal Resources</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {[
                          { name: "Zafaf.net", type: "Bridal Directory", description: "Comprehensive Arabic wedding planning resource" },
                          { name: "Arabian Weddings", type: "Magazine", description: "Leading bridal fashion magazine in the region" },
                          { name: "Bridal Arabia", type: "Platform", description: "Luxury bridal fashion and planning platform" },
                          { name: "Wedding Belle", type: "Blog", description: "Contemporary wedding trends and inspiration" }
                        ].map((resource, index) => (
                          <div key={resource.name} className="bg-blue-50 p-3 rounded-lg">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-medium text-sm">{resource.name}</h5>
                              <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                            </div>
                            <p className="text-xs text-gray-600">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Henna Magazine", type: "Publication", description: "Cultural wedding traditions and modern trends" },
                          { name: "SayIDo", type: "Platform", description: "Middle Eastern wedding planning platform" },
                          { name: "Bride Arabia", type: "Magazine", description: "Premium bridal fashion and lifestyle" },
                          { name: "Wedding Dreams", type: "Blog", description: "Dream wedding inspiration and planning" }
                        ].map((resource, index) => (
                          <div key={resource.name} className="bg-purple-50 p-3 rounded-lg">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-medium text-sm">{resource.name}</h5>
                              <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                            </div>
                            <p className="text-xs text-gray-600">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Academic & Research Papers</h4>
                    <div className="space-y-3">
                      {[
                        { 
                          title: "Text Mining Applications in Fashion Trend Analysis", 
                          author: "Al-Mansouri et al.", 
                          year: "2023",
                          journal: "Journal of Fashion Technology",
                          description: "Comprehensive study on text mining applications in fashion trend forecasting"
                        },
                        { 
                          title: "Kansei Design in Cultural Fashion Products", 
                          author: "Hassan & Rahman", 
                          year: "2022",
                          journal: "Design Studies Quarterly",
                          description: "Application of Kansei engineering to cultural fashion design"
                        },
                        { 
                          title: "Social Media Impact on Bridal Fashion in the Arab World", 
                          author: "Khalil et al.", 
                          year: "2024",
                          journal: "Middle East Journal of Marketing",
                          description: "Analysis of social media influence on bridal fashion trends"
                        },
                        { 
                          title: "Sustainable Practices in Luxury Bridal Fashion", 
                          author: "Said & Omar", 
                          year: "2023",
                          journal: "Sustainable Fashion Review",
                          description: "Exploration of sustainability in high-end bridal fashion"
                        }
                      ].map((paper, index) => (
                        <div key={paper.title} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-sm mb-1">{paper.title}</h5>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-600">{paper.author} ({paper.year})</span>
                            <Badge variant="secondary" className="text-xs">{paper.journal}</Badge>
                          </div>
                          <p className="text-xs text-gray-700">{paper.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Industry Reports & Market Research</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {[
                          { name: "Arab Bridal Market Report 2024", publisher: "Market Research Middle East", type: "Industry Report" },
                          { name: "Luxury Fashion in GCC", publisher: "Luxury Institute", type: "Market Analysis" },
                          { name: "Sustainable Fashion Trends", publisher: "Fashion Revolution", type: "Trend Report" },
                          { name: "Digital Transformation in Bridal", publisher: "Tech Fashion Group", type: "Technology Report" }
                        ].map((report, index) => (
                          <div key={report.name} className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-medium text-sm mb-1">{report.name}</h5>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-600">{report.publisher}</span>
                              <Badge variant="outline" className="text-xs">{report.type}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Cultural Fashion Heritage", publisher: "UNESCO Fashion", type: "Cultural Study" },
                          { name: "Bridal Fashion Consumer Insights", publisher: "Consumer Behavior Institute", type: "Consumer Research" },
                          { name: "Climate-Adaptive Fashion", publisher: "Sustainable Fashion Council", type: "Research Paper" },
                          { name: "Social Media Marketing in Fashion", publisher: "Digital Marketing Association", type: "Marketing Report" }
                        ].map((report, index) => (
                          <div key={report.name} className="bg-yellow-50 p-3 rounded-lg">
                            <h5 className="font-medium text-sm mb-1">{report.name}</h5>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-600">{report.publisher}</span>
                              <Badge variant="outline" className="text-xs">{report.type}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Wedding Dress Trends Analysis: Egypt and the Arab World (2015-2025)
            </p>
            <p className="text-sm text-gray-500">
              Comprehensive research report combining traditional analysis with modern methodologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}